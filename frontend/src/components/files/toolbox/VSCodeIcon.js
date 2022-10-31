import Icon from '../../Icon';
import { IDE_Icons } from '../../../icons';
import { exec } from 'child_process';

const VSCodeIcon = () => {
  const { exec } = require('child_process');

  const onDoubleClick = (e) => {
    exec(
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      [],
      (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log(stdout);
      },
    );
  };

  return (
    <Icon
      title={'Visual Studio Code'}
      onDoubleClick={onDoubleClick}
      thumbnail={IDE_Icons.VSCode}
    />
  );
};

export default VSCodeIcon;
