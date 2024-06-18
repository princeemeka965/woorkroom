import React from "react";

const Input = React.forwardRef(({ label, name, labelClass, variant, placeholder, errors, ...rest }, ref) => {
    return <>
        <div className={variant}>
            <div className="relative flex gap-2 flex-col w-full min-w-[200px]">
                <label
                    className={`pointer-events-none left-0 flex h-full w-full select-none leading-tight transition-all ${labelClass}`}
                >
                    {label}
                </label>
                <input
                    className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0`}
                    placeholder={placeholder}
                    ref={ref}
                    name={name}
                    {...rest}
                    autoComplete="off"
                />
            </div>
            {errors ?
                <small className="mt-2 font-semibold mx-1 capitalize" style={{ color: '#dc3545' }}>
                    {name} field is required
                </small>
                :
                null
            }
        </div>

    </>
});

export default Input;