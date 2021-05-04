import Library from '../../components/Library';
import DivContainer from '../../base/DivContainer';
import Title from '../../base/Title';

export default function LibraryContainer() {
  return (
    <DivContainer
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Title type="4">My bots:</Title>
    </DivContainer>
  );
}
