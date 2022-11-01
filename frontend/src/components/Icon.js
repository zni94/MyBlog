import '../css/icon.css';
import { addActiveById, removeActive } from '../modules/activeControl';
import { calendarHandler, documentHandler } from '../modules/controlCalendar';

const Icon = (props) => {
  const { onDoubleClick, onClick, thumbnail, title, target, path } = props;

  const onMouseDown = (e) => {
    removeActive('icon-container');
    addActiveById(e.target, 'iconContainer');

    // calendar remove active
    calendarHandler.nonActive();
    documentHandler.remove();
  };

  return (
    <div
      className={'icon-container'}
      id={'iconContainer'}
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      onMouseDown={onMouseDown}
      data-target={target}
      data-path={path}
    >
      <button className={'icon-image'}>
        <svg width={36} height={36}>
          <image width={36} height={36} href={thumbnail} />
        </svg>
      </button>
      <label className={'icon-name'}>{title}</label>
    </div>
  );
};

export default Icon;
