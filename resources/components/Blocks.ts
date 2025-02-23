export async function importComponent(component_type: string){
    // @ts-ignore
    const importMap = {
        'headline': import('./Blocks/Headline/Component.svelte'),
    }

    // @ts-ignore
    return Promise.resolve(importMap[component_type]);
}
