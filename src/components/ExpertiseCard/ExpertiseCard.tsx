function ExpertiseCard(props: any) {
    return (
        <div id={props.key} className="flex flex-col gap-2 w-[454px] max-h-[206px] pl-[35px] max-[1200px]:w-[45%] max-[600px]:w-[100%]">
            <ul className="list-disc">
                <li className="font-medium text-[calc(1.2rem+0.8vw)] leading-[130%] tracking-[-0.01em]">{props.title}</li>
            </ul>
            <p className="font-medium text-[calc(0.45rem+0.8vw)] leading-[140%] tracking-[-0.01em]">{props.description}</p>
        </div>
    );
}

export default ExpertiseCard;