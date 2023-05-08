import { projects01, projects02 } from 'assets/projectsImage/projectsPage';
import { useTranslation } from 'react-i18next';

const ProjectsData = () => {
  const { t } = useTranslation('projectsList');

  const projectsList = [
    {
      id: 1,
      type: t('1.type'),
      name: t('1.name'),
      role: t('1.role'),
      brief: t('1.brief'),
      techStack: 'React.js, styled-component, i18n, Figma and more',
      imageUrl: projects01,
      path: '/projects/portfolio2023',
      isWide: false,
    },
    {
      id: 2,
      type: t('2.type'),
      name: t('2.name'),
      role: t('2.role'),
      brief: t('2.brief'),
      techStack: 'Wordpress, CSS, Figma',
      imageUrl: projects02,
      path: '/projects/atlantic-sewing-guild',
      isWide: false,
    },
  ];

  return projectsList;
};

export default ProjectsData;
