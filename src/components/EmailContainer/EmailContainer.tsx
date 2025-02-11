function EmailContainer() {
    return (
        <div className="w-full min-h-[70vh] flex justify-center items-center">
            <div className="flex flex-col items-center gap-20">
                <h2 className="font-medium text-[140px] leading-[110%] tracking-[-0.02em] text-center">Let’s talk!</h2>
                <button className="rounded-[144px] p-[32px] w-[262px] h-[92px] bg-black flex justify-center items-center cursor-pointer gap-2">
                    <span className="font-medium text-[20px] leading-[140%] tracking-[-0.01em] text-white">
                        hello@joey.co
                    </span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_468)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 5.97445C13.3563 5.99193 12.8546 6.00262 12.3079 5.99488C10.7235 5.97263 8.70119 5.79554 7.10845 5.13969L7.48921 4.21502C8.90177 4.79664 10.7685 4.97311 12.3219 4.99505C13.091 5.00587 13.7686 4.97878 14.2536 4.94897C14.4959 4.93404 14.6896 4.91854 14.8219 4.9068C14.8881 4.90096 14.9389 4.89604 14.9728 4.89261L15.0106 4.88873L15.0196 4.88779L15.0216 4.88754L15.643 4.81851L15.574 5.43961L15.5737 5.44191L15.5728 5.45088L15.5689 5.48872C15.5655 5.52261 15.5605 5.57342 15.5547 5.63957C15.543 5.77193 15.5275 5.96559 15.5125 6.2079C15.4827 6.69287 15.4556 7.37048 15.4665 8.13961C15.4884 9.693 15.6649 11.5597 16.2465 12.9723L15.3218 13.353C14.666 11.7603 14.4889 9.73802 14.4666 8.15362C14.4589 7.60696 14.4696 7.1053 14.487 6.68163L5.53112 15.6376L4.82401 14.9305L13.78 5.97445Z" fill="white" stroke="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_468">
                                <rect width="13" height="15" fill="white" transform="translate(9.79297 19.8994) rotate(-135)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default EmailContainer;