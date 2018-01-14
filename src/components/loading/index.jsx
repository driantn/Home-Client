// @flow
import React from 'react';
import './loading.scss';

type Props = {
  theme: string,
};

const Loading = (props: Props) => (
  <div className={`spinner ${props.theme ? props.theme : 'dark'}`} />
);

export default Loading;
