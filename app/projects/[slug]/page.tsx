// app/projects/[slug]/page.tsx

import Link from 'next/link';
import { ArrowLeft, Github, FileText, Users, CheckCircle, Code, Database, Globe, Shield, Cpu, BarChart3, Layers } from 'lucide-react';
import { projectsData } from '../data/project';
import ImageGallery from './ImageGallery';

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

// Get current year for copyright
const currentYear = new Date().getFullYear();

// Icon mapping for technology categories
const getCategoryIcon = (category: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Backend': <Code className="w-4 h-4" />,
    'Frontend': <Globe className="w-4 h-4" />,
    'Database': <Database className="w-4 h-4" />,
    'Security': <Shield className="w-4 h-4" />,
    'Scraping & AI': <Cpu className="w-4 h-4" />,
    'Language': <Code className="w-4 h-4" />,
    'Libraries': <Layers className="w-4 h-4" />,
    'Dataset': <Database className="w-4 h-4" />,
    'Evaluation': <BarChart3 className="w-4 h-4" />,
    'Frameworks': <Code className="w-4 h-4" />,
    'Models': <Cpu className="w-4 h-4" />,
    'Real-time': <Globe className="w-4 h-4" />,
  };
  return iconMap[category] || <Code className="w-4 h-4" />;
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-cyan-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h1>
          <p className="text-white/60 text-base leading-relaxed mb-6">{project.description}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm border border-white/10"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            )}

            {project.publication && (
              <a
                href={project.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm border border-white/10"
              >
                <FileText className="w-4 h-4" />
                View Paper
              </a>
            )}

            {project.teamCollaboration?.isTeamProject && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20">
                <Users className="w-4 h-4" />
                Team Project
              </span>
            )}
          </div>
        </div>

        {/* Project Goals */}
        {project.goals && project.goals.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">Project Goals</h2>
            <div className="space-y-3">
              {project.goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">
                    <span className="text-white font-medium">{goal.title}:</span>{' '}
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Team & Collaboration */}
        {project.teamCollaboration && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">Team & Collaboration</h2>
            <p className="text-white/70 mb-5">
              This is a <span className="text-white font-medium">collaborative team project</span>.{' '}
              {project.teamCollaboration.role}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  <span className="text-white font-medium">Process:</span>{' '}
                  {project.teamCollaboration.process.join(' ')}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  <span className="text-white font-medium">Reproducibility:</span>{' '}
                  {project.teamCollaboration.reproducibility}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-cyan-400 mt-1">•</span>
                <span>
                  <span className="text-white font-medium">Documentation:</span>{' '}
                  {project.teamCollaboration.documentation}
                </span>
              </li>
            </ul>
          </section>
        )}

        {/* Technologies Used */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-5">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                  {getCategoryIcon(tech.category)}
                  <span>{tech.category}</span>
                </div>
                <p className="text-white/90 text-sm">{tech.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Work on the Project's Features */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-5">My Work on the Project&apos;s Features</h2>
          <div className="space-y-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-white font-medium mb-1">
                  {index + 1}) {feature.title}
                </h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UI Showcase */}
        {project.images && project.images.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">Web UI</h2>
            <ImageGallery images={project.images} />
          </section>
        )}

        {/* Mobile UI */}
        {project.mobileImages && project.mobileImages.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">Mobile UI</h2>
            <ImageGallery images={project.mobileImages} variant="portrait" />
          </section>
        )}

        {/* Result Analysis */}
        {project.resultAnalysis && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">Result Analysis</h2>

            {/* Metrics Cards */}
            {(project.resultAnalysis.accuracy || project.resultAnalysis.precision || 
              project.resultAnalysis.recall || project.resultAnalysis.f1Score) && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.resultAnalysis.accuracy && (
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                      {project.resultAnalysis.accuracy}
                    </p>
                    <p className="text-white/50 text-sm">Accuracy</p>
                  </div>
                )}
                {project.resultAnalysis.precision && (
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-violet-400">
                      {project.resultAnalysis.precision}
                    </p>
                    <p className="text-white/50 text-sm">Precision</p>
                  </div>
                )}
                {project.resultAnalysis.recall && (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-amber-400">
                      {project.resultAnalysis.recall}
                    </p>
                    <p className="text-white/50 text-sm">Recall</p>
                  </div>
                )}
                {project.resultAnalysis.f1Score && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                      {project.resultAnalysis.f1Score}
                    </p>
                    <p className="text-white/50 text-sm">F1-Score</p>
                  </div>
                )}
              </div>
            )}

            {/* Key Takeaways */}
            {project.resultAnalysis.keyTakeaways && (
              <div className="mb-6">
                <p className="text-white/70">
                  <span className="text-amber-400 font-medium">Key takeaways:</span>{' '}
                  {project.resultAnalysis.keyTakeaways}
                </p>
              </div>
            )}

            {/* Evaluation Setup */}
            {project.resultAnalysis.evaluationSetup && project.resultAnalysis.evaluationSetup.length > 0 && (
              <div className="mb-5">
                <h3 className="text-white font-medium mb-2">Evaluation Setup</h3>
                <ul className="space-y-1">
                  {project.resultAnalysis.evaluationSetup.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Findings */}
            {project.resultAnalysis.keyFindings && project.resultAnalysis.keyFindings.length > 0 && (
              <div className="mb-5">
                <h3 className="text-white font-medium mb-2">Key Findings</h3>
                <ul className="space-y-1">
                  {project.resultAnalysis.keyFindings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Error Profile */}
            {project.resultAnalysis.errorProfile && project.resultAnalysis.errorProfile.length > 0 && (
              <div className="mb-5">
                <h3 className="text-white font-medium mb-2">Error Profile</h3>
                <ul className="space-y-1">
                  {project.resultAnalysis.errorProfile.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Limitations & Next Steps */}
            {project.resultAnalysis.limitations && project.resultAnalysis.limitations.length > 0 && (
              <div>
                <h3 className="text-white font-medium mb-2">Limitations & Next Steps</h3>
                <ul className="space-y-1">
                  {project.resultAnalysis.limitations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-violet-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* A Look at the Website */}
        {project.websiteSections && project.websiteSections.length > 0 && (
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-5">A Look at the Website</h2>
            <div className="space-y-8">
              {project.websiteSections.map((section, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{section.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-white/70 text-sm">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publication */}
        {project.publication && (
          <section className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Publication</h2>
            <p className="text-white/70 mb-2">
              <span className="text-white font-medium">Conference:</span>{' '}
              {project.publication.conference}
            </p>
            <p className="text-white/70">
              <span className="text-white font-medium">Status:</span>{' '}
              <span className="text-emerald-400">{project.publication.status}</span>
            </p>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Shahriar Rahman. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/#projects" 
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/#contact" 
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                Contact
              </Link>
              <a 
                href="https://github.com/Anik246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}