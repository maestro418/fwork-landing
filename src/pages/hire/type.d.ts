
declare interface ProjectItemType {
    img: string,
    title: string,
    tech: string,
    slug: string,
    team: Array<{ gender: string, member: string }>
}

declare interface ListItemType {
    title: string,
    desc: string,
    project: {
        title: string,
        item: Array<ProjectItemType>
    }
    faq: {
        title: string,
        item: Array<{
            title: string,
            desc: string
        }>
    }
    article: string
}

declare interface DataListType {
    link: string,
    img: string,
    name: string,
    slug: string,
    item: ListItemType
}

declare interface DataType {
    title: string,
    slug: string,
    list: DataListType[]
}

declare interface CategoryType {
    title: string,
    slug: string,
    list: Array<{
        name: string,
        slug: string,
        img: string
    }>
}