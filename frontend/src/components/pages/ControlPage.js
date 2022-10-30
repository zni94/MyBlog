import Icon from '../Icon';
import { isNull } from '../../modules/isNull';

const ControlPage = (props) => {
  /**
   * Input Object
   *   { pageName, isBool, path }
   */

  const { page, onDoubleClick } = props;

  return (
    <div className={'contents-container'}>
      <div className={'contents'}>
        <ul>
          {!isNull(page) &&
            page.items.length > 0 &&
            page.items.map((item, index) =>
              item.type === 'folder' ? (
                <li key={index}>
                  <Icon
                    onDoubleClick={onDoubleClick}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    path={item.path.join('/')}
                  />
                </li>
              ) : (
                <li key={index}>{item.page}</li>
              ),
            )}
        </ul>
      </div>
    </div>
  );
};

export default ControlPage;
