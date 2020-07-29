import axios from 'axios';

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
  GET_PROJECT_CLIENT,
  ADD_PROJECT_CLIENT,
  GET_TASKS_PROJECT,
  GET_CONTRIBUTORS,
  ADD_CONTRIBUTOR,
  PROJECT_MISC,
  GET_TASK_COMMENTS,
  GET_PROJECT_SECTIONS,
  ADD_PROJECT_SECTION,
  ADD_SECTION_TO_TASK,
  GET_TASKS_PER_SECTION,
} from './types';

// Create a project
export const createProject = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/projects', values, config);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//   Get one project
export const getProject = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/${projectId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//   Get all projects
export const getAllProjects = (history) => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects/company');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add a task linked to a project
export const addTask = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/tasks/${projectId}`, values, config);
    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get a specific task
export const getTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${taskId}`);

    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateTaskName = (taskId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put(
      `/api/tasks/taskname/${taskId}`,
      values,
      config
    );
    dispatch({
      tpye: GET_TASK_NAME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update a task
export const updateTask = (taskId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/tasks/${taskId}`, values, config);
    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProjectClient = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/client/${projectId}`);
    dispatch({
      type: GET_PROJECT_CLIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addProjectClient = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'appllication/json',
      },
    };
    const res = await axios.post(
      `/api/projects/client/${projectId}`,
      values,
      config
    );
    dispatch({
      type: ADD_PROJECT_CLIENT,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProjectContributors = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/contributors/${projectId}`);
    dispatch({
      type: GET_CONTRIBUTORS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectContributors = (projectId, values) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/projects/contributors/${projectId}`,
      values,
      config
    );
    dispatch({
      type: ADD_CONTRIBUTOR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectManager = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(
      `/api/projects/manager/${projectId}`,
      values,
      config
    );
    dispatch({
      type: PROJECT_MISC,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectSetup = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/projects/setup/${projectId}`,
      values,
      config
    );
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getTaskComments = (taskId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/comments/${taskId}`);
    dispatch({
      type: GET_TASK_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add task comment to new api endpoint
export const addTaskCommentProject = (taskId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/comments/task/${taskId}`,
      values,
      config
    );
    dispatch({
      type: ADD_TASK_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProjectComments = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/comments/${projectId}`);
    dispatch({
      type: GET_PROJECT_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// // Comment on a Project
export const addCommentProject = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/comments/project/${projectId}`,
      values,
      config
    );
    dispatch({
      type: ADD_PROJECT_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// remember to change api endpoint to /api/projects/tasks/:projectId
export const getProjectTasks = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/tasks/${projectId}`);
    dispatch({
      type: GET_TASKS_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProjectSections = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/sections/${projectId}`);
    dispatch({
      type: GET_PROJECT_SECTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create a section in a project
export const addProjectSection = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/projects/sections/${projectId}`,
      values,
      config
    );
    dispatch({
      type: ADD_PROJECT_SECTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addTaskInSection = (taskId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/tasks/sections/${taskId}`,
      values,
      config
    );

    dispatch({
      type: ADD_SECTION_TO_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
