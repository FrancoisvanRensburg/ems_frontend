import React, { useState, Fragment } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTask,
  updateTask,
} from '../../../../../Redux/actions/projectActions';

import { getUserTasks } from '../../../../../Redux/actions/userActions';

import TaskCommentBox from './Comments';

import Modal from '../../../../../shared/components/ModalThree';
import ProgressBar from '../../../../../shared/components/ProgressBar';
import CircleProgressBar from '../../../../../shared/components/CircleProgressBar';
import { SubmitButton } from '../../../../../shared/components/Buttons';
import {
  MyTextInput,
  MyTextarea,
} from '../../../../../shared/components/Forms';

import { CardItem, CardHeader, TaskProject, CardFooter } from './Styles';

import { progressBarColors } from '../../../../../shared/utils/Styles';

const TaskCard = ({ task }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const tsk = useSelector((store) => store.project.task);
  const dispatch = useDispatch();

  const endDate = moment(task.actualenddate);
  const startDate = moment(task.actualstartdate);
  const currentDate = moment(Date.now());
  // console.log(tsk.taskname);

  const durCalc = () => {
    return Math.round(endDate.diff(startDate) / (3600 * 1000) / 24 + 1).toFixed(
      0
    );
  };

  return (
    <>
      <CardItem
        onClick={() => {
          dispatch(getTask(task._id));
          setToggleModal(!toggleModal);
        }}
      >
        <CardHeader>
          <h3>{task.taskname}</h3>
          <CircleProgressBar
            progress={task.progress}
            size={40}
            strokeWidth={5}
            circleOneStroke={`${progressBarColors.greenComponent}`}
            circleTwoStroke={`${progressBarColors.greenFiller}`}
          />
          {/* <span>{task.progress}%</span> */}
        </CardHeader>
        <TaskProject>
          <span>Proj: </span>
          <span>{task.project.projectname}</span>
        </TaskProject>
        <CardFooter>
          <div>
            <span>start on: </span>
            <span>
              <Moment format='ddd'>{task.actualstartdate}</Moment>
            </span>
          </div>
          <div>
            <span>dur: </span>
            <span>{durCalc()} days</span>
          </div>
        </CardFooter>
      </CardItem>
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        {tsk === null ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            <Modal.Header>{task.taskname}</Modal.Header>
            <Modal.Body>
              <div style={{ overflowY: 'auto', height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      height: '30px',
                      lineHeight: '30px',
                      padding: '0 20px',
                      border: '1px solid red',
                    }}
                  >
                    <Moment format='YYYY/MM/DD'>{tsk.actualstartdate}</Moment>
                  </span>
                  <div style={{ height: 40, width: '50%' }}>
                    <ProgressBar percentage={tsk.progress} />
                  </div>
                  <span
                    style={{
                      height: '30px',
                      lineHeight: '30px',
                      padding: '0 20px',
                      border: '1px solid red',
                    }}
                  >
                    <Moment format='YYYY/MM/DD'>{tsk.actualenddate}</Moment>
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 30 }}>
                  <div style={{ width: '60%' }}>
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        description:
                          tsk === null || !tsk.description
                            ? ''
                            : tsk.description,
                        progress:
                          tsk === null || !tsk.progress ? '' : tsk.progress,
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        {
                          tsk !== null &&
                            dispatch(updateTask(task._id, values));
                        }
                        dispatch(getUserTasks());
                        // modalRef.current.close();
                        setToggleModal(!toggleModal);
                        setSubmitting(false);
                      }}
                    >
                      <Form>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '20px 0',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                            }}
                          >
                            <label htmlFor=''>Progress:</label>
                            <MyTextInput name='progress' type='number' />
                          </div>
                          <div>
                            <span>Effort: </span>
                            <span>
                              {tsk.effort}
                              {' hr(s)'}
                            </span>
                          </div>
                        </div>
                        <div>
                          <label htmlFor=''>Description</label>
                          <div
                            style={{ height: '150px', boxSizing: 'border-box' }}
                          >
                            <MyTextarea name='description' type='text' />
                          </div>
                        </div>
                        <div
                          style={{
                            margin: '10px 0',
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <SubmitButton text={'update'} />
                        </div>
                      </Form>
                    </Formik>
                  </div>
                  <div style={{ width: '40%' }}>
                    {task === null ? (
                      <div>No task comments</div>
                    ) : (
                      <TaskCommentBox task={tsk} />
                    )}
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Fragment>
        )}
      </Modal>
    </>
  );
};

export default TaskCard;
