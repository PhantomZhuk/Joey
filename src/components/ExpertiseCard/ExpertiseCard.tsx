function ExpertiseCard(props: any) {
    return (
        <div id={props.key} className="flex flex-col gap-2 w-[454px] h-[206px] pl-[35px]">
            <ul className="list-disc">
                <li className="font-medium text-[32px] leading-[130%] tracking-[-0.01em]">{props.title}</li>
            </ul>
            <p className="font-medium text-[20px] leading-[140%] tracking-[-0.01em]">{props.description}</p>
        </div>
    );
}

export default ExpertiseCard;