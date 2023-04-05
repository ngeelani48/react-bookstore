import { useDispatch, useSelector } from 'react-redux';
import './styles/Categories.css';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  return (
    <div>
      <h1>{status}</h1>
      <button className="cat-btn" type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
    </div>
  );
};
export default Categories;
