import { useReducer, useState } from 'react';
import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorMain from '../../components/ConstructorMain';
import ConstructorTools from '../../components/ConstructorTools';
import DivContainer from '../../base/DivContainer';

export default function ConstructorContainer() {
  const [list, setList] = useState({
    main: [{ id: 12, label: 'hey' }],
    toolbar: [
      { id: 0, label: 'Message' },
      { id: 1, label: 'Message1' },
      { id: 2, label: 'Message2' },
      { id: 3, label: 'Message3' },
    ],
  });

  return (
    <>
      <DivContainer
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        <DivContainer
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ConstructorHeader onClick={() => {}} />
          <ConstructorMain
            list={list.main}
            destinationList={list.toolbar}
            setList={modifiedList => {
              setList(modifiedList);
            }}
          />
        </DivContainer>
        <ConstructorTools list={list.toolbar} />
      </DivContainer>
    </>
  );
}
