import {
  GET_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
  ADD_TASK,
  TASK_ERROR,
  GET_TASK,
  GET_TASK_NAME,
  ADD_TASK_COMMENT,
  ADD_PROJECT_COMMENT,
  GET_PROJECT_COMMENTS,
  GET_TASK_COMMENTS,
  GET_CONTRIBUTORS,
  GET_PROJECT_CLIENT,
  ADD_PROJECT_CLIENT,
  ADD_CONTRIBUTOR,
  PROJECT_MISC,
  GET_TASKS_PROJECT,
  GET_PROJECT_SECTIONS,
  ADD_PROJECT_SECTION,
  ADD_SECTION_TO_TASK,
  GET_TASKS_PER_SECTION,
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  task: null,
  tasks: [],
  loading: true,
  errors: {},
  projectComments: [],
  projectComment: null,
  taskComments: [],
  taskComment: null,
  sections: [],
  section: null,
  secionTasks: [],
  projectContributors: [],
  client: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT_CLIENT:
      return {
        ...state,
        client: payload,
        loading: false,
      };
    case ADD_PROJECT_CLIENT:
      return {
        ...state,
        client: payload,
        loading: false,
      };
    case GET_TASK:
      return {
        ...state,
        task: payload,
        loading: false,
      };
    case GET_TASK_NAME:
      return {
        ...state,
        // task: { ...state.task, taskname: payload },
        task: payload,
        loading: false,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: payload,
        // project: { ...state.project, tasks: payload },
        loading: false,
      };
    case GET_PROJECT_SECTIONS:
      return {
        ...state,
        sections: payload,
        loading: false,
      };
    // Look at adding sections to project, might be wrong and be imlimented similar to tasks, but hink this is right
    case ADD_PROJECT_SECTION:
      return {
        ...state,
        sections: payload,
        loading: false,
      };
    case PROJECT_MISC:
      return {
        ...state,
        project: { ...state.project, projectmanager: payload },
        loading: false,
      };
    case GET_CONTRIBUTORS:
    case ADD_CONTRIBUTOR:
      return {
        ...state,
        // project: { ...state.project, contributors: payload },
        projectContributors: payload,
        // contributors: payload,
        loading: false,
      };
    case GET_TASK_COMMENTS:
      return {
        ...state,
        taskComments: payload,
        loading: false,
      };
    case ADD_TASK_COMMENT:
      return {
        ...state,
        taskComments: payload,
        // task: { ...state.task, comments: payload },
        loading: false,
      };
    case GET_PROJECT_COMMENTS:
      return {
        ...state,
        projectComments: payload,
        loading: false,
      };
    case ADD_PROJECT_COMMENT:
      return {
        ...state,
        projectComments: payload,
        // project: { ...state.project, comments: payload },
        loading: false,
      };
    case GET_TASKS_PROJECT:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };
    case PROJECT_ERROR:
    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_SECTION_TO_TASK:
      return {
        ...state,
        task: { ...state.task, section: payload },
        loading: false,
      };
    default:
      return state;
  }
}
