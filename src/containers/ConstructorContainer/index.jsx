import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorMain from '../../components/ConstructorMain';
import ConstructorTools from '../../components/ConstructorTools';
import DivContainer from '../../base/DivContainer';

export default function ConstructorContainer() {
  return (
    <>
      <ConstructorHeader onClick={() => {}} />
      <DivContainer
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        <ConstructorMain />
        <ConstructorTools />
      </DivContainer>
    </>
  );
}
