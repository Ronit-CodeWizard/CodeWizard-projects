import React from 'react';
import { ChevronDown, Folder, Play, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { GITHUB_REPO_URL, getProjectCodeFiles } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  isExpanded,
  onToggleExpand,
}) => {
  const sourceFolderUrl = project.sourceUrl || `${GITHUB_REPO_URL}/tree/main/${project.name}`;
  const livePreviewUrl = project.liveUrl || `https://ronit-codewizard.github.io/CodeWizard/${project.name}/`;

  // Code files only without folder name
  const codeFiles = project.files && project.files.length > 0
    ? project.files
    : getProjectCodeFiles(project.name);

  return (
    <motion.div
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.42,
        delay: Math.min((index % 8) * 0.045, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`w-full bg-[var(--card-bg)] border ${
        isExpanded ? 'border-[#f95700]/40 shadow-[0_4px_20px_rgba(249,87,0,0.08)]' : 'border-[var(--card-border)] hover:border-[#f95700]/30 shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
      } rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 transition-colors duration-200 overflow-hidden`}
    >
      {/* Header Row with Project Title and Expand Toggle */}
      <div className="flex items-center justify-between gap-4">
        {/* Project Title */}
        <div
          onClick={onToggleExpand}
          className="cursor-pointer select-none flex-1 flex items-center"
        >
          <h3 className={`text-xl sm:text-2xl font-bold leading-normal tracking-tight transition-colors ${
            isExpanded ? 'text-[#f95700]' : 'text-[var(--text-primary)] hover:text-[#f95700]'
          }`}>
            {project.title}
          </h3>
        </div>

        {/* Accordion Toggle Chevron Button: Solid Orange with Smooth Rotating Icon */}
        <button
          onClick={onToggleExpand}
          id={`toggle-card-${project.id}`}
          aria-label={isExpanded ? 'Collapse project card' : 'Expand project card'}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#f95700] hover:bg-[#e04e00] active:scale-90 text-white shadow-[0_4px_14px_rgba(249,87,0,0.35)] hover:shadow-[0_6px_20px_rgba(249,87,0,0.45)] transition-all duration-200 cursor-pointer shrink-0"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <ChevronDown className="w-5 h-5 stroke-[2.5]" />
          </motion.div>
        </button>
      </div>

      {/* Expanded Accordion Content with Silky Smooth Animation */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key={`expanded-content-${project.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[#ededeb] dark:border-zinc-800/80">
              {/* Code Files tags for this project without folder names */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.08 }}
                className="flex flex-wrap gap-2 mb-5"
              >
                {codeFiles.map((file, idx) => (
                  <span
                    key={idx}
                    className="bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-xl px-3.5 py-1.5 text-xs font-medium text-[var(--text-primary)] shadow-2xs select-none"
                  >
                    {file}
                  </span>
                ))}
              </motion.div>

              {/* Exactly 2 Action Links: Source Repo & Preview Live */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.08 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
              >
                {/* 1. Source Repo Button */}
                <a
                  href={sourceFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`source-repo-${project.id}`}
                  className="w-full border-2 border-[#f95700] text-[#f95700] hover:bg-[#f95700]/5 active:scale-[0.98] font-bold text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer no-underline"
                >
                  <Folder className="w-4 h-4 text-[#f95700] fill-[#f95700]/10" />
                  <span>Source Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                </a>

                {/* 2. Preview Live Button */}
                <a
                  href={livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`preview-live-${project.id}`}
                  className="w-full bg-[#f95700] hover:bg-[#e04e00] active:scale-[0.98] text-white font-bold text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(249,87,0,0.32)] transition-all cursor-pointer no-underline"
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                  <span>Preview Live</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 ml-0.5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

