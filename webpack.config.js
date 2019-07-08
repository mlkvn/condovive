const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const SitemapPlugin = require('sitemap-webpack-plugin').default;

/* basic paths -- directly compatible with static-site-generator-webpack-plugin */
const paths = [
  '/acerca.html/',
  '/precio.html/',
  '/contacto.html/'
];

module.exports = {
	entry: './src/js',
	output: {
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.xml$/,
				use: 'raw-loader'
			},			
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/precio.html',
			filename: 'precio.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/blog_listado.html',
			filename: 'blog_listado.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/acerca.html',
			filename: 'acerca.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/blog_detalle.html',
			filename: 'blog_detalle.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/contacto.html',
			filename: 'contacto.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/beneficios.html',
			filename: 'beneficios.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/demo.html',
			filename: 'demo.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebPackPlugin({
			template: './src/politicaderespaldo.html',
			filename: 'politicaderespaldo.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new HtmlWebPackPlugin({
			template: './src/avisodeprivacidad.html',
			filename: 'avisodeprivacidad.html',
			favicon: './src/favicon-condovive.ico'
		}),
		new SitemapPlugin('http://localhost:8080', paths)
	]
};
