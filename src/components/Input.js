import { EyeClose, EyeOpen } from "./SvgIcon";

function Input(props) {

    const setErorrMessage = (label, errorStr) => {
        const errorMsg = errorStr.replace('this', label)
        return errorMsg
    }

    return <>
        <div className={props.variant}>
            <div className="relative flex gap-2 flex-col w-full min-w-[200px]">
                <label
                    className={`pointer-events-none left-0 flex h-full w-full select-none leading-tight transition-all ${props.labelClass}`}
                >
                    {props.label}
                </label>
                <input
                    className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 ${props.errorMessage ? `field-error` : ''}`}
                    placeholder={props.placeholder}
                    name={props.name}
                    type={props.type}
                    autoComplete="off"
                    disabled={props.disabled}
                />
            </div>
            {props.errorMessage ?
                <small className="mt-2 font-semibold mx-1" v-if="errorMessage" style="color: #dc3545">{
                    setErorrMessage(props.label, props.errorMessage)
                }</small>
                :
                null
            }
        </div>

    </>
};

export default Input;