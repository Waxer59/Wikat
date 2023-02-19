export default function Breed({
  breedPhoto = '',
  breedName = '',
  breedDescription = '',
  breedTemperament = '',
  breedOrigin = '',
  breedLifeSpan = '',
  breedAdaptabillity = 0,
  breedAffectionLevel = 0,
  breedChildFriendly = 0,
  breedGrooming = 0,
  breedIntelligence = 0,
  breedHealthIssues = 0,
  breedSocialNeeds = 0,
  breedStrangerFriendly = 0,
  breedOtherPhotos = []
}) {
  const levelBars = (level: number = 0): JSX.Element => {
    const DEFAULT_LEVEL_BARS = 5
    return (
      <ul className={`left-[171px] absolute flex gap-[8px]`}>
        {Array.from({ length: DEFAULT_LEVEL_BARS }).map((_, i) => (
          <li
            key={i}
            className={`w-[60px] h-[12px] bg-[${
              i >= level ? '#E0E0E0' : '#544439'
            }] rounded-[8px]`}></li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <div className="flex flex-col sm:ml-[35px]">
        <div className="flex sm:gap-[115px] gap-[40px] mt-[50px] flex-wrap sm:justify-center justify-start">
          <div className="z-[100] relative after:bg-[#DEC68B] sm:after:w-[45px] sm:after:h-[330px] after:w-0 after:h-[75%] after:left-[-15px] after:top-0 after:mt-[20px] after:absolute after:z-[-1] after:content-[''] after:rounded-[15px]">
            <img
              src={breedPhoto}
              alt={`${breedName} photo`}
              className="sm:w-[370px] w-full sm:h-[370px] h-full rounded-[24px]"
            />
          </div>
          <div className="">
            <h2 className="font-[600] text-[36px]">{breedName}</h2>
            <p className="max-w-[600px] text-[18px] mt-[25px]">
              {breedDescription}
            </p>
            <ul className="flex flex-col gap-[32px] mt-[32px]">
              <li>
                <strong>Temperament:</strong> {breedTemperament}
              </li>
              <li>
                <strong>Origin:</strong> {breedOrigin}
              </li>
              <li>
                <strong>Life Span:</strong> {breedLifeSpan}
              </li>
              <li className="flex items-center relative">
                <strong>Adaptabillity:</strong> {levelBars(breedAdaptabillity)}
              </li>
              <li className="flex items-center relative">
                <strong>Affection level:</strong>{' '}
                {levelBars(breedAffectionLevel)}
              </li>
              <li className="flex items-center relative">
                <strong>Child Friendly:</strong> {levelBars(breedChildFriendly)}
              </li>
              <li className="flex items-center relative">
                <strong>Grooming:</strong> {levelBars(breedGrooming)}
              </li>
              <li className="flex items-center relative">
                <strong>Intelligence:</strong> {levelBars(breedIntelligence)}
              </li>
              <li className="flex items-center relative">
                <strong>Health issues:</strong> {levelBars(breedHealthIssues)}
              </li>
              <li className="flex items-center relative">
                <strong>Social needs:</strong> {levelBars(breedSocialNeeds)}
              </li>
              <li className="flex items-center relative">
                <strong>Stranger friendly:</strong>{' '}
                {levelBars(breedStrangerFriendly)}
              </li>
            </ul>
          </div>
        </div>
        <div className="font-[600] text-[36px] mt-[80px]">
          <h3>Other photos</h3>
          <ul className="flex gap-[46px] mt-[40px] mb-[177px] flex-wrap justify-center 3xl:justify-start">
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
            <li>
              <img
                src="images/discoverCat.png"
                alt=""
                className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
