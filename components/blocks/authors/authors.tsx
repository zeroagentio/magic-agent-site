export type Authors = 'Rohith' | 'Revanth' | "Aravind";

export const Rohith = () => {
  return(
    <div className="relative mt-2 flex items-center gap-x-4">           
                <img alt="Rohith" src={'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="https://www.linkedin.com/in/rohith-nd/" target="_blank">
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
                <img alt="Revanth" src={'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="https://www.linkedin.com/in/Revanth-2002" target="_blank">
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
                <img alt="Aravind" src={'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="https://www.linkedin.com/in/aravind--swaminathan/" target="_blank" >
                      <span className="absolute inset-0" />
                      Aravind S
                    </a>
                  </p>
                  <p className="text-gray-600">CTO</p>
                </div>
            </div>
  );
}