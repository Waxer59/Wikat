interface BreedLevelCharacteristicsInterface {
  levelBars: JSX.Element
  characteristic: string
}

export const BreedLevelCharacteristics = ({
  levelBars,
  characteristic
}: BreedLevelCharacteristicsInterface): JSX.Element => {
  return (
    <li className="flex items-center relative">
      <strong>{characteristic}:</strong> {levelBars}
    </li>
  )
}
