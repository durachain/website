import React from 'react';
import { Tooltip, Icon } from 'antd';

const EditButton: React.SFC<{
  title: React.ReactNode;
  filename?: string;
  sourcePath?: string;
}> = ({
  title,
  filename,
  sourcePath = 'https://github.com/dura-sh/dura.world/master/edit',
}) => {
  return (
    <Tooltip title={title}>
      <a className="edit-button" target="_blank" href={`${sourcePath}${filename}`}>
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
};

export default EditButton;
