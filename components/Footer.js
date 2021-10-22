import { GlobeIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>
          <a href="https://goo.gl/maps/Bk3DCntg88zbSt6f7" target="_blank">
            India
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5  mr-1 text-green-700" />
          20% of the revenue goes for community welfare
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>
            <a href="https://patreon.com/vanshajpoonia">Support</a>
          </p>
          <p>
            <a href="https://hypnosys.business.site" target="_blank">
              Business
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Made by Vanshaj Poonia</p>
        </div>
      </div>
    </footer>
  );
}
