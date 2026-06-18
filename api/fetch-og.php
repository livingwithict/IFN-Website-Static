<?php
// /api/fetch-og.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$url = $_GET['url'] ?? null;

if (!$url || !filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid URL']);
    exit;
}

// Fetch with proper headers
$context = stream_context_create([
    'http' => [
        'timeout' => 10,
        'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    ],
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
    ]
]);

$html = @file_get_contents($url, false, $context);

if (!$html) {
    http_response_code(400);
    echo json_encode(['error' => 'Could not fetch URL']);
    exit;
}

// Extract OpenGraph meta tags
preg_match('/<meta\s+property="og:title"\s+content="([^"]+)"/i', $html, $title);
preg_match('/<meta\s+property="og:image"\s+content="([^"]+)"/i', $html, $image);
preg_match('/<meta\s+property="og:description"\s+content="([^"]+)"/i', $html, $desc);
preg_match('/<title>([^<]+)<\/title>/i', $html, $pageTitle);

// Handle YouTube embeds
$youtubeMatch = null;
if (preg_match('/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)/', $url, $youtubeMatch)) {
    $videoId = $youtubeMatch[1] ?? $youtubeMatch[2];
    $image[1] = "https://img.youtube.com/vi/{$videoId}/maxresdefault.jpg";
}

echo json_encode([
    'title' => $title[1] ?? $pageTitle[1] ?? 'No title',
    'image' => $image[1] ?? null,
    'description' => $desc[1] ?? 'No description'
]);
?>