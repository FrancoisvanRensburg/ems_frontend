import React, { Fragment } from 'react';

import { Tcell } from '../Styles';

const ListItem = ({ employee: { name, email, usertype } }) => {
  return (
    <Fragment>
      <tr>
        <Tcell>{name}</Tcell>
        <Tcell>{email}</Tcell>
        <Tcell>{usertype}</Tcell>
      </tr>
    </Fragment>
  );
};

export default ListItem;
