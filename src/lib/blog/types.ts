export interface GitHubIssue {
    id: number;
    number: number;
    title: string;
    body: string | null;
    state: 'open' | 'closed';
    created_at: string;
    updated_at: string;
    html_url: string;
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    labels: Array<{
        id: number;
        name: string;
        color: string;
        description: string | null;
    }>;
}

export interface BlogPost {
    id: number;
    number: number;
    title: string;
    content: string;
    htmlContent: string;
    slug: string;
    publishedAt: string;
    updatedAt: string;
    author: {
        name: string;
        avatar: string;
        url: string;
    };
    githubUrl: string;
    labels: string[];
}

export interface BlogListResponse {
    posts: BlogPost[];
    total: number;
}