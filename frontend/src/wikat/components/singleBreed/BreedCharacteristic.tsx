interface Props {
  desc: JSX.Element | string
  characteristic: string
}

const BreedCharacteristic: React.FC<Props> = ({ desc, characteristic }) => {
  return (
    <li className="flex items-center relative">
      <strong>{characteristic}:</strong>&nbsp;{desc}
    </li>
  )
}

export default BreedCharacteristic
