import Icon from '../Icon';

const TaskFile = (props) => {
  const { title, onClick, thumbnail } = props;

  return <Icon title={title} onClick={onClick} thumbnail={thumbnail} />;
};

export default TaskFile;
