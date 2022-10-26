import { useSelector } from 'react-redux';
import ControlWindow from './ControlWindow';

const DocumentWindow = () => {
  const { document } = useSelector((state) => state.togglePages);

  return (
    <ControlWindow
      obj={document}
      pageName={'document'}
      defaultPath={['C:', 'background', 'document']}
      target={'document'}
    />
  );
};

export default DocumentWindow;