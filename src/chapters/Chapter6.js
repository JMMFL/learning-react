import StarRating from '../components/StarRating';
import { ColorProvider } from '../components/color-hooks';
import AddColorForm from '../components/AddColorForm';
import ColorList from '../components/ColorList';

function Chapter6() {
  return (
    <>
      <StarRating />
      <ColorList />
      <ColorProvider>
        <AddColorForm />
      </ColorProvider>
    </>
  )
}

export default Chapter6;