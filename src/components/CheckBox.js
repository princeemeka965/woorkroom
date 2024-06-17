function CheckBox({ props }) {
    return <>
        <div className="flex">
            <label className=" custom-label ">
                <div
                    className="checkboxDesign flex justify-center items-center mr-2 "
                >
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={shouldBeChecked}
                        onChange={props.updateInput}
                        disabled={props.disabled}
                        value={''}
                    />
                    <svg
                        className="hidden w-5 h-5 pointer-events-none"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 1.71879C15 0.770645 14.2294 0 13.2812
            0H1.71879C0.770645 0 0 0.770645 0 1.71879V13.2812C0 14.2294 0.770645
            15 1.71879 15H13.2812C14.2294 15 15 14.2294 15 13.2812V1.71879Z"
                            fill="#3F8CFF"
                        />
                        <path
                            d="M11.3009 5.02708C11.5453 5.27142 11.5453
            5.66635 11.3009 5.9108L7.2384 9.97322C7.11652 10.0951
            6.95653 10.1564 6.79654 10.1564C6.63655 10.1564 6.47656 10.0951
            6.35468 9.97322L4.32347 7.94201C4.07903 7.69768 4.07903 7.30263 4.32347
            7.0583C4.5678 6.81385 4.96274 6.81385 5.20718 7.0583L6.79654 8.64765L10.4172
            5.02708C10.6616 4.78264 11.0565 4.78264 11.3009 5.02708Z"
                            fill="#FAFAFA"
                            stroke-width="1"
                        />
                    </svg>
                </div>
            </label>
            <h1 style={props.labelStyle}>
                {label}
            </h1>
        </div>
    </>
};

export default CheckBox;