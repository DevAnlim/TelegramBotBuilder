import ConstructorBlock from '../../components/ConstructorBlock';
import Title from '../../base/Title';
import Divider from '../../base/Divider';
import ScrolledContainer from '../../base/ScrolledContainer';
import Text from '../../base/Text';

export default function ConstructorListItemContainer({
  id,
  index,
  label,
  description,
}) {
  return (
    <ConstructorBlock id={id} index={index}>
      <Title type="h4">{label}</Title>
      <Divider />
      {/* <ScrolledContainer> */}
      <Text type="p">{description}</Text>
      {/* </ScrolledContainer> */}
    </ConstructorBlock>
  );
}
