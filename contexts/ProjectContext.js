import { createContext, useContext } from 'react';

const ProjectContext = createContext('');

export const useProject = ()=>(useContext(ProjectContext));

export default ProjectContext;