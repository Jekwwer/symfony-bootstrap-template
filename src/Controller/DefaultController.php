<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('base.html.twig', []);
    }

    #[Route('/page1', name: 'page1')]
    public function page1(): Response
    {
        return $this->render('page1.html.twig',[]);
    }

    #[Route('/page2', name: 'page2')]
    public function page2(): Response
    {
        return $this->render('page2.html.twig',[]);
    }
}
