import Icon from '../Icon';
import { findPage, findPath } from '../../modules/browserControl';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ControlPage = (props) => {
  const { obj } = props;

  const dispatch = useDispatch();
  const [page, setPage] = useState(findPage(obj));

  useEffect(() => {
    console.log('obj', obj);
    setPage(findPage(obj));
  }, [obj, obj.path]);

  const onDoubleClick = (e) => {
    findPath(dispatch, e, 'windowContainer');
  };

  return (
    <div className={'contents-container'}>
      <div className={'contents'}>
        <ul>
          {page.items.length > 0 &&
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
