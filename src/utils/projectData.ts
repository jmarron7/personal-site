export interface Project {
    name: string,
    description: string,
    repo_url: string,
    demo_url?: string,
    image_path: string
}

export const projectData: Project[] = [{
    name: "Game Guild",
    description: "WebApp using RAWG API videogame data built with Typescript, React, and ChakraUI with filtering and sorting capabilities",
    repo_url: "https://github.com/jmarron7/game-guild",
    demo_url: 'https://game-guild.vercel.app/',
    image_path: '$lib/assets/gameguild.png'
},
{
    name: "Pixl",
    description: "Cross platform pixel art editor written in Go and Fyne toolkit with functionality to open/save created files, select color via color picker, and more",
    repo_url: "https://github.com/jmarron7/go-pixl",
    image_path: '$lib/assets/gopixl.png'
},
{
    name: "Serverless Spotify ETL Pipeline",
    description: "Python ETL (Extract, Transform, Load) pipeline using the Spotify API on AWS Serverless Architecture",
    repo_url: "https://github.com/jmarron7/spotify-etl-project",
    image_path: '$lib/assets/etlproject.png'
},
{
    name: "Multithreaded Grep Tool",
    description: "Terminal CLI application of a multithreaded grep implementation written in Go for substring searching within files",
    repo_url: "https://github.com/jmarron7/go-mgrep",
    image_path: '$lib/assets/mgrep.png'
}] 