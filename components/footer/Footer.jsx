const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-end px-1 pb-0 pt-3 lg:px-8 xl:flex-row">
      <p className="text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
        ©{1900 + new Date().getYear()} Riplestack. All Rights Reserved.
      </p>
      {/* <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:hello@simmmple.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Support
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://simmmple.com/licenses"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              License
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://simmmple.com/terms-of-service"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://blog.horizon-ui.com/"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Blog
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Footer;
