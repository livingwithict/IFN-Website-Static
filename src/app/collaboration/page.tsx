import React from 'react';
import Header from '@/components/HeaderDark';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CollaborationHero from '@/components/CollaborationHero';
import CollaboratorsGrid from '@/components/CollaboratorsGrid';
import { collaboratorsByCategory } from '@/data/collaborators';

export default function CollaborationPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* <CollaborationHero /> */}

        {/* About Collaboration Section */}
        <section className="py-4 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <div className="mx-auto mb-4 section-divider" />
              <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-[32px]">
                About Our Collaboration
              </h2>
            </div>
            <div className="mb-20">
              <h3 className="mb-8 text-2xl font-semibold text-body-text">
                Building Stronger Digital Nepal
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-body-text/75">
                    Our collaborations span across government agencies, private sector organizations, and international institutions. Together, we work to address Nepal's digital challenges and unlock opportunities for growth and innovation in the ICT sector.
                  </p>
                  <p className="text-body-text/75">
                    Through strategic partnerships, we facilitate knowledge exchange, promote best practices, and develop solutions that benefit the entire digital ecosystem.
                  </p>
                </div>
                <div>
                  <p className="mb-4 text-body-text/75">
                    Whether through policy advocacy, technical capacity building, or industry collaboration, our partners play a vital role in advancing digital transformation. We are committed to fostering long-term relationships that create sustainable impact.
                  </p>
                  <p className="text-body-text/75">
                    If you're interested in collaborating with ICT Foundation Nepal, we'd love to hear from you. Together, we can create positive change.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaborators by Category */}
            <div>
              <h2 className="mb-16 text-2xl font-semibold text-body-text">
                Our Partners
              </h2>

              {/* Government Bodies */}
              {collaboratorsByCategory.government.length > 0 && (
                <CollaboratorsGrid
                  collaborators={collaboratorsByCategory.government}
                  title="Government Bodies"
                />
              )}

              {/* Industry & Professional Associations */}
              {collaboratorsByCategory.industry.length > 0 && (
                <CollaboratorsGrid
                  collaborators={collaboratorsByCategory.industry}
                  title="Industry & Professional Associations"
                />
              )}

              {/* International Partners */}
              {collaboratorsByCategory.international.length > 0 && (
                <CollaboratorsGrid
                  collaborators={collaboratorsByCategory.international}
                  title="International Partners"
                />
              )}
              
            </div>

            {/* CTA Section */}
            <div className="mt-20 rounded-2xl border border-primary/10 bg-primary/5 p-8 text-center sm:p-12">
              <h3 className="mb-4 text-2xl font-bold text-body-text">
                Interested in Partnership?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-body-text/75">
                We're always looking for organizations that share our vision of advancing digital transformation in Nepal.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get In Touch
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
