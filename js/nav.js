let nav = `
<nav class="nav container">
                    <div class="nav__data">
                        <a href="#" class="nav__logo">
                            <i class="ri-bug-line"></i>JS30
                        </a>    
                        <div class="nav__toggle" id="nav--toggle">
                            <i class="ri-menu-line nav__burger"></i>
                            <i class="ri-close-line nav__close"></i>
                        </div>
                    </div>

                    <!-- Nav Menu -->
                    <div class="nav__menu" id="nav__menu">
                        <ul class="nav__list">
                            <li><a href="../Home/index.html" class="nav__link">Home</a></li>
                            
                            <li><a href="#" class="nav__link">Company</a></li>
                            
                            <!-- DROPDOWN 1-->
                            <li class="dropdown__item">
                                <div class="nav__link">
                                    js30(1~10) <i class="ri-arrow-drop-down-line dropdown__arrow"></i>
                                </div>

                                <ul class="dropdown--menu">
                                    <li>
                                        <a href="../01-JSDrumkit/index.html" class="dropdown__link">
                                            <i class="ri-javascript-line"></i> 01-JavaScript Drum kit
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../02-CSS+JS Clock/index.html" class="dropdown__link">
                                            <i class="ri-javascript-line"></i> 02-CSS+JS Clock
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../03-css variables and js" class="dropdown__link">
                                            <i class="ri-javascript-line"></i> 03-css variables and js
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../04-Array Cardio/index.html" class="dropdown__link">
                                            <i class="ri-javascript-line"></i> 04-Array Cardio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../05-Flex Panels Gallery/index.html" class="dropdown__link">
                                            <i class="ri-javascript-line"></i> 05-Flex Panels Gallery
                                        </a>
                                    </li>

                                    <!-- DROPDOWN SUBMENU -->
                                    <li class="dropdown--subitem">
                                        <div class="dropdown__link">
                                            <i class="ri-bar-chart-line"></i> 6 ~ 10
                                            <i class="ri-add-line dropdown__add"></i>
                                        </div>

                                        <ul class="dropdown--submenu">
                                            <li>
                                                <a href="../06-Type Ahead/index.html" class="dropdown__sublink">
                                                    <i class="ri-javascript-line"></i> 06-Type Ahead
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../07-Array Cardio Day 2/index.html" class="dropdown__sublink">
                                                    <i class="ri-javascript-line"></i> 07-Array Cardio Day 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../08-Fun with HTML5 Canvas/index.html" class="dropdown__sublink">
                                                    <i class="ri-javascript-line"></i> 08-Fun with HTML5 Canvas
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../09-Dev Tools Domination/index.html" class="dropdown__sublink">
                                                    <i class="ri-javascript-line"></i> 09-Dev Tools Domination
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../10-Hold Shift to Check Multiple Checkboxes/index.html" class="dropdown__sublink">
                                                    <i class="ri-javascript-line"></i> 10-Hold Shift to Check Multiple Checkboxes
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            
                            <li><a href="#" class="nav__link">Products</a></li>
                            
                             <!-- DROPDOWN 2-->
                             <li class="dropdown__item">
                                <div class="nav__link">
                                    Users <i class="ri-arrow-drop-down-line dropdown__arrow"></i>
                                </div>

                                <ul class="dropdown--menu">
                                    <li>
                                        <a href="#" class="dropdown__link">
                                            <i class="ri-user-line"></i> Profils
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="dropdown__link">
                                            <i class="ri-lock-line"></i> Accounts
                                        </a>
                                    </li>
                                    
                                    <!-- DROPDOWN SUBMENU -->
                                    <li class="dropdown--subitem">
                                        <div class="dropdown__link">
                                            <i class="ri-bar-chart-line"></i> Reports
                                            <i class="ri-add-line dropdown__add"></i>
                                        </div>

                                        <ul class="dropdown--submenu">
                                            <li>
                                                <a href="#" class="dropdown__sublink">
                                                    <i class="ri-file-list-line"></i> Document
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" class="dropdown__sublink">
                                                    <i class="ri-cash-line"></i> Payments
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" class="dropdown__sublink">
                                                    <i class="ri-refund-2-line"></i> Refunds
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li><a href="#" class="nav__link">Contact</a></li>
                        </ul>
                    </div>
                </nav>
`;