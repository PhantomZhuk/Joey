function ProjectCard(props: any) {
    return (
        <div id={props.id} className="w-[48%] h-[650px] flex flex-col gap-5">
            <img src={props.image} alt={props.title} className="w-[100%]"/>
            <div className="flex flex-col gap-2">
                <p className="font-medium tetx-[28px] leading-[140%] tracking-[-0.01em]">{props.title}</p>
                <p className="font-medium tetx-[28px] leading-[140%] tracking-[-0.01em]">{props.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
