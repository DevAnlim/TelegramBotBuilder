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
        <ConstructorMain
          list={[
            { id: 0, label: 'Message' },
            { id: 1, label: 'Message1' },
            { id: 2, label: 'Message2' },
            { id: 3, label: 'Message3' },
          ]}
        />
        <ConstructorTools
          list={[
            { id: 0, label: 'Message' },
            { id: 1, label: 'Message1' },
            { id: 2, label: 'Message2' },
            { id: 3, label: 'Message3' },
          ]}
        />
      </DivContainer>
    </>
  );
}
