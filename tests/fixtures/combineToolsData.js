const expectedDataT1 = {
    languages: [
        {
            name: 'JavaScript',
            color: 'bg-[#57f281]',
            borderColor: 'border-[#37f069]'
        },
        {
            name: 'Python',
            color: 'bg-[#3572A5]',
            borderColor: 'border-[#3572A5]'
        }
    ],
    technologies: [
        {
            name: 'Node.js',
            color: 'bg-[#61d0f2]',
            borderColor: 'border-[#40ccf7]'
        },
        {
            name: 'Flask',
            color: 'bg-[#000000]',
            borderColor: 'border-[#FFFFFF]'
        }
    ]
};

const manualToolsWithMissingData = [
    {
        title: 'Tool C',
        filters: {},
        links: { repoUrl: 'https://github.com/asyncapi/tool-c' }
    }
];

const manualToolsToSort = {
    category1: {
        description: 'Sample Category',
        toolsList: [
            {
                title: 'Tool Z',
                filters: { language: 'JavaScript' },
                links: { repoUrl: 'https://github.com/asyncapi/tool-z' }
            },
            {
                title: 'Tool A',
                filters: { language: 'Python' },
                links: { repoUrl: 'https://github.com/asyncapi/tool-a' }
            }
        ]
    }
};

const toolWithMultipleLanguages = {
    title: 'Multi-Language Tool',
    filters: {
        language: ['JavaScript', 'Python', 'NewLanguage'],
        technology: ['Node.js']
    },
    links: { repoUrl: 'https://github.com/example/multi-language-tool' }
};

const automatedToolsT5 = {
    'category1': {
        description: 'Category 1 Description',
        toolsList: [toolWithMultipleLanguages]
    }
};

const invalidToolT4 = { title: 'Invalid Tool' };

const automatedToolsT4 = {
    'category1': {
        description: 'Category 1 Description',
        toolsList: []
    }
};
const manualToolsT4 = {
    'category1': {
        toolsList: [invalidToolT4]
    }
};

const toolWithNewTagsT6 = {
    title: 'New Tags Tool',
    filters: {
      language: 'NewLanguage',
      technology: ['NewTechnology']
    },
    links: { repoUrl: 'https://github.com/example/new-tags-tool' }
  };

  const automatedToolsT6 = {
    'category1': {
      description: 'Category 1 Description',
      toolsList: [toolWithNewTagsT6]
    }
  };

module.exports = { expectedDataT1, manualToolsWithMissingData, manualToolsToSort, automatedToolsT5, automatedToolsT4, manualToolsT4, automatedToolsT6 }