import React, { memo } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoadingProps } from './loading.props';

const Loading = (props: LoadingProps) => {
  const { size = 5 } = props;
  const spinnerSizeClass = ` fa-${size}x`;
  const classes = 'fa-spin'.concat(spinnerSizeClass);

  return <FaSpinner className={classes} />;
};

export default memo(Loading);
