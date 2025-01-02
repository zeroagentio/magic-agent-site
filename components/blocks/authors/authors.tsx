export type Authors = 'Rohith' | 'Revanth' | "Aravind";

export const Rohith = () => {
  return(
    <div className="relative mt-2 flex items-center gap-x-4">           
                <img alt="Rohith" src={'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent%2Frohith.png?alt=media&token=aba300c0-6f85-42c2-b59a-27629fec7acd'} 
                className="size-10 rounded-full bg-gray-50 object-contain" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a rel="noopener" href="https://www.linkedin.com/in/rohith-nd/" target="_blank">
                      <span className="absolute inset-0" />
                      Rohith ND
                    </a>
                  </p>
                  <p className="text-gray-600">CEO</p>
                </div>
            </div>
  );
}

export const Revanth = () => {
  return(
    <div className="relative mt-2 flex items-center gap-x-4">           
                <img alt="Revanth" src={'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent%2Frevanth.png?alt=media&token=e0fac0df-2507-43c5-b75e-14510a30d381'} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a rel="noopener" href="https://www.linkedin.com/in/Revanth-2002" target="_blank">
                      <span className="absolute inset-0" />
                      Revanth ND
                    </a>
                  </p>
                  <p className="text-gray-600">COO</p>
                </div>
            </div>
  );
}

export const Aravind = () => {
  return(
    <div className="relative mt-2 flex items-center gap-x-4">           
                <img alt="Aravind" src={'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent%2Faravind.png?alt=media&token=a5251f52-631c-45a1-860f-ad2fef170d03'} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a rel="noopener" href="https://www.linkedin.com/in/aravind--swaminathan/" target="_blank" >
                      <span className="absolute inset-0" />
                      Aravind S
                    </a>
                  </p>
                  <p className="text-gray-600">CTO</p>
                </div>
            </div>
  );
}