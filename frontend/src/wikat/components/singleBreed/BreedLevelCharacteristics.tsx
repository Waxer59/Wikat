interface BreedLevelCharacteristics {
  levelBars: JSX.Element
  characteristic: string
}

export const BreedLevelCharacteristics = ({
  levelBars,
  characteristic
}: BreedLevelCharacteristics): JSX.Element => {
  return (
    <li className="flex items-center relative">
      <strong>{characteristic}:</strong> {levelBars}
    </li>
  )
}
