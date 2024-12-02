import React from "react";
import { Input, InputGroup } from "rsuite";

const styles = {
  width: 200,
  borderRadius: 100
};

const SearchForm = () => {
  return (
    <div className="relative mr-3 w-[200px]">
      <InputGroup className="relative items-center border border-gray-500" inside style={styles}>
        <Input className="relative left-3 !p-0 !pr-3" placeholder="Search" />
        <InputGroup.Button className="!rounded-full !p-2">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default SearchForm;
