<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    public function profile(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                'name' => 'Fanny Fadlilatunnisa',
                'role' => 'Backend Developer',
                'email' => 'fannyfadlila25@gmail.com',
                'description' => 'Bachelor’s degree in Informatics Engineering with experience in several software development projects.',
                'github' => 'https://github.com/fannyfdlsa',
                'linkedin' => 'https://www.linkedin.com/in/fanny-fadlilatunnisa/',
            ],
        ]);
    }

    public function skills(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'category' => 'Programming Languages',
                    'items' => [
                        'PHP',
                        'JavaScript',
                        'Python',
                    ],
                ],
                [
                    'category' => 'Frameworks',
                    'items' => [
                        'Laravel',
                        'React',
                        'Express.js',
                    ],
                ],
                [
                    'category' => 'Database',
                    'items' => [
                        'PostgreSQL',
                        'MySQL',
                        'SQL',
                    ],
                ],
                [
                    'category' => 'Tools & Others',
                    'items' => [
                        'Git',
                        'Postman',
                        'Docker',
                        'Google Cloud Run',
                        'Firebase Cloud Messaging',
                        'Microsoft Office'
                    ],
                ],
            ],
        ]);
    }

    public function experiences(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'company' => 'PT Sinergi Informatika Semen Indonesia',
                    'position' => 'Developer',
                    'period' => 'Oct 2025 - May 2026',
                    'description' => [
                        'Developed and maintained backend services for the PROCSI application using RESTful API architecture.',
                        'Developed and maintained 20+ RESTful API endpoints to support application functionality and system integration.',
                        'Managed PostgreSQL databases including SQL queries, CRUD operations, and database troubleshooting.',
                        'Integrated Firebase Cloud Messaging (FCM) to support real-time mobile push notifications.',
                    ],
                ],
                [
                    'company' => 'PT Bank Negara Indonesia Tbk.',
                    'position' => 'Data Analyst - Retail Productive Banking',
                    'period' => 'Feb 2024 - Jun 2024',
                    'description' => [
                        'Supported data management and analysis for the Xpora program.',
                        'Designed a prototype dashboard using Figma to visualize MSME data.',
                        'Developed an event catalogue to support buyer expansion strategies.',
                    ],
                ],
            ],
        ]);
    }

    public function projects(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'id' => 1,
                    'title' => 'VisitCampus',
                    'category' => 'Cloud Computing',
                    'description' => 'A cloud-based application developed as part of Bangkit Academy, focusing on API development and cloud deployment.',
                    'technologies' => [
                        'JavaScript',
                        'Express.js',
                        'SQL',
                        'Docker',
                        'Google Cloud Run',
                    ],
                    'github' => 'https://github.com/fannyfdlsa/Cloud-VisitCampus',
                    'demo' => '#',
                ],
                [
                    'id' => 2,
                    'title' => 'Cataract Severity Detection',
                    'category' => 'Deep Learning',
                    'description' => 'A deep learning project that classifies cataract severity into four categories using transfer learning and CNN architectures.',
                    'technologies' => [
                        'Python',
                        'CNN',
                        'VGG16',
                        'VGG19',
                        'ResNet50',
                    ],
                    'github' => 'https://github.com/fannyfdlsa/Cataract_model_detection',
                    'demo' => '#',
                ],
                [
                    'id' => 3,
                    'title' => 'Portfolio Website',
                    'category' => 'Web Development',
                    'description' => 'A personal portfolio website built with React as the frontend and Laravel REST API as the backend.',
                    'technologies' => [
                        'React',
                        'Laravel',
                        'PHP',
                        'REST API',
                    ],
                    'github' => 'https://github.com/fannyfdlsa/portfolio-frontend',
                    'demo' => '#',
                ],
            ],
        ]);
    }

    public function education(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'institution' => 'Universitas Esa Unggul',
                    'degree' => 'Bachelor of Informatics Engineering',
                    'period' => 'Aug 2021 - Feb 2025',
                    'gpa' => '3.92 / 4.00',
                    'description' => 'Relevant coursework includes Software Engineering, Web Programming, Database, Artificial Intelligence, Machine Learning, Data Mining, and Statistics.',
                ],
            ],
        ]);
    }
}