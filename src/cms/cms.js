import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import AlbumsPagePreview from './preview-templates/AlbumsPagePreview'
import BioPagePreview from './preview-templates/BioPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import QAPagePreview from './preview-templates/QAPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('albums', AlbumsPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('bio', BioPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('qa', QAPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
