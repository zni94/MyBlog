import Icon from '../Icon';

const ControlFile = (props) => {
  const { title, onDoubleClick, thumbnail } = props;

  return (
    <Icon title={title} onDoubleClick={onDoubleClick} thumbnail={thumbnail} />
  );
};

export default ControlFile;
